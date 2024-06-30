import Breakline from '@/common/components/elements/Breakline';
import { author, featureSwich } from '@/contents/siteMetadata';
import {} from '@/contents/siteMetadata';

import BookACall from './BookACall';
import SocialMediaList from './SocialMediaList';

const Contact = () => {
  return (
    <section className='space-y-6'>
      {/* <SocialMediaList /> */}
      {/* <Breakline /> */}

      {featureSwich.meeting && (
        <>
          <BookACall calMeetingUrl={author.calMeetingUrl} />
          <Breakline />
        </>
      )}
    </section>
  );
};

export default Contact;
