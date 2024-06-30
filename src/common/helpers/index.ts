import { utcToZonedTime } from 'date-fns-tz';
import { format, getTime, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { siteMetadata } from '@/contents/siteMetadata';

export const removeHtmlTags = (html: string) => {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  } else {
    return html;
  }
};

export const formatExcerpt = (content: string, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content);
  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, '');

  return trimmed + (cleanedContent.length > maxLength ? '...' : '');
};

export const calculateReadingTime = (content: string, wordsPerMinute = 5) => {
  const cleanedContent = formatExcerpt(content);
  const readingTimeMinutes = Math.ceil(
    cleanedContent.split(/\s+/).length / wordsPerMinute
  );
  return readingTimeMinutes;
};

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  if (!date) {
    return '';
  }
  const formattedDate = format(
    utcToZonedTime(parseISO(date), siteMetadata.timeZone),
    type,
    { locale: zhCN }
  );
  return formattedDate;
};

export const getTimestamp = (date: string) => {
  const [y, m, d] = formatDate(date, 'yyyy MM dd')
    .split(' ')
    .map((i) => Number.parseInt(i));
  return getTime(new Date(y, m, d));
};
