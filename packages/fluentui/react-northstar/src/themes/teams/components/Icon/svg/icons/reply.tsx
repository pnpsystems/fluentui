import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M3.707 10.998L7.09619 7.60827C7.29146 7.41301 7.29146 7.09643 7.09619 6.90116C6.92263 6.7276 6.6532 6.70831 6.45834 6.84331L6.38909 6.90116L2.14645 11.1438C1.97288 11.3174 1.9536 11.5868 2.08859 11.7817L2.14645 11.8509L6.38909 16.0936C6.58435 16.2888 6.90093 16.2888 7.09619 16.0936C7.26976 15.92 7.28905 15.6506 7.15405 15.4557L7.09619 15.3864L3.707 11.998L10 11.9974C14.0609 11.9974 17.368 8.76988 17.4961 4.74009L17.5 4.49736C17.5 4.22122 17.2761 3.99736 17 3.99736C16.7239 3.99736 16.5 4.22122 16.5 4.49736C16.5 8.00917 13.715 10.8705 10.2331 10.9933L10 10.9974L3.707 10.998L7.09619 7.60827L3.707 10.998Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M4.31 10.498L7.27297 7.53505C7.56586 7.24215 7.56586 6.76728 7.27297 6.47439C7.0067 6.20812 6.59004 6.18391 6.29643 6.40177L6.21231 6.47439L1.96967 10.717C1.7034 10.9833 1.6792 11.4 1.89705 11.6936L1.96967 11.7777L6.21231 16.0203C6.5052 16.3132 6.98008 16.3132 7.27297 16.0203C7.53924 15.7541 7.56344 15.3374 7.34559 15.0438L7.27297 14.9597L4.31 11.998L10 11.9974C14.1979 11.9974 17.6162 8.65973 17.7462 4.49337L17.75 4.24736C17.75 3.83314 17.4142 3.49736 17 3.49736C16.5858 3.49736 16.25 3.83314 16.25 4.24736C16.25 7.62243 13.5748 10.3727 10.2291 10.4932L10 10.4974L4.31 10.498L7.27297 7.53505L4.31 10.498Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
