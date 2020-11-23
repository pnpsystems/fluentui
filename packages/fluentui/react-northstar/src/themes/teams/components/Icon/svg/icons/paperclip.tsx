import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M4.82865 10.4853L10.4855 4.82843C11.6571 3.65685 13.5566 3.65685 14.7281 4.82843C15.8997 6 15.8997 7.89949 14.7281 9.07107L8.01063 15.7886C7.42485 16.3744 6.4751 16.3744 5.88931 15.7886C5.30352 15.2028 5.30352 14.253 5.88931 13.6673L11.8997 7.65685C12.095 7.46159 12.095 7.14501 11.8997 6.94975C11.7045 6.75448 11.3879 6.75448 11.1926 6.94975L5.1822 12.9602C4.20589 13.9365 4.20589 15.5194 5.1822 16.4957C6.15852 17.472 7.74143 17.472 8.71774 16.4957L15.4353 9.77817C16.9974 8.21607 16.9974 5.68342 15.4353 4.12132C13.8732 2.55922 11.3405 2.55922 9.7784 4.12132L4.12154 9.77817C3.92628 9.97343 3.92628 10.29 4.12154 10.4853C4.31681 10.6805 4.63339 10.6805 4.82865 10.4853Z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M5.28033 10.6088L10.5836 5.30546C11.6576 4.23151 13.3988 4.23151 14.4727 5.30546C15.5467 6.3794 15.5467 8.1206 14.4727 9.19454L8.10876 15.5585C7.6206 16.0467 6.82915 16.0467 6.34099 15.5585C5.85283 15.0703 5.85283 14.2789 6.34099 13.7907L11.9978 8.13388C12.2907 7.84099 12.2907 7.36612 11.9978 7.07322C11.705 6.78033 11.2301 6.78033 10.9372 7.07322L5.28033 12.7301C4.20639 13.804 4.20639 15.5452 5.28033 16.6192C6.35427 17.6931 8.09548 17.6931 9.16942 16.6192L15.5334 10.2552C17.1931 8.59548 17.1931 5.90452 15.5334 4.2448C13.8737 2.58507 11.1827 2.58507 9.52297 4.2448L4.21967 9.5481C3.92678 9.84099 3.92678 10.3159 4.21967 10.6088C4.51256 10.9017 4.98744 10.9017 5.28033 10.6088Z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
