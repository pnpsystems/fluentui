import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M7.14645 7.14646C7.34171 6.9512 7.65829 6.9512 7.85355 7.14646L10 9.29291L12.1464 7.14646C12.3417 6.9512 12.6583 6.9512 12.8536 7.14646C13.0488 7.34172 13.0488 7.65831 12.8536 7.85357L10.7071 10L12.8536 12.1465C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L10 10.7071L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1465L9.29289 10L7.14645 7.85357C6.95118 7.65831 6.95118 7.34172 7.14645 7.14646Z" />
        <path d="M2 6.5C2 5.11929 3.11929 4 4.5 4H15.5C16.8807 4 18 5.11929 18 6.5V13.5C18 14.8807 16.8807 16 15.5 16H4.5C3.11929 16 2 14.8807 2 13.5V6.5ZM4.5 5C3.67157 5 3 5.67157 3 6.5V13.5C3 14.3284 3.67157 15 4.5 15H15.5C16.3284 15 17 14.3284 17 13.5V6.5C17 5.67157 16.3284 5 15.5 5H4.5Z" />
      </g>
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M4.5 4C3.11929 4 2 5.11929 2 6.5V13.5C2 14.8807 3.11929 16 4.5 16H15.5C16.8807 16 18 14.8807 18 13.5V6.5C18 5.11929 16.8807 4 15.5 4H4.5ZM7.14645 7.14646C7.34171 6.9512 7.65829 6.9512 7.85355 7.14646L10 9.29291L12.1464 7.14646C12.3417 6.9512 12.6583 6.9512 12.8536 7.14646C13.0488 7.34172 13.0488 7.65831 12.8536 7.85357L10.7071 10L12.8536 12.1465C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L10 10.7071L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1465L9.29289 10L7.14645 7.85357C6.95118 7.65831 6.95118 7.34172 7.14645 7.14646Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
