import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Image } from '@edx/paragon';
import { Search } from '@edx/paragon/icons';

import emptyCourseSVG from 'assets/empty-course.svg';
import messages from './messages';
import './index.scss';

export const NoCoursesView = () => {
  const { formatMessage } = useIntl();
  return (
    <div
      id="no-courses-content-view"
      className="d-flex align-items-center justify-content-center mb-4.5"
    >
      <Image src={emptyCourseSVG} alt={formatMessage(messages.bannerAlt)} />
      <h1>
        {formatMessage(messages.lookingForChallengePrompt)}
      </h1>
      <p>
        {formatMessage(messages.exploreCoursesPrompt)}
      </p>
      <Button
        variant="brand"
        as="a"
        href="https://kursbox.pl/kursy"
        iconBefore={Search}
      >
        {formatMessage(messages.exploreCoursesButton)}
      </Button>
    </div>
  );
};

export default NoCoursesView;
