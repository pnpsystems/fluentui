import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 32 32" className={classes.svg}>
      <path
        d="M9.5 29H28.5C28.775 29 29 28.775 29 28.5V9H24.5C23.673 9 23 8.327 23 7.5V3H9.5C9.225 3 9 3.225 9 3.5V28.5C9 28.775 9.225 29 9.5 29Z"
        fill="white"
      />
      <path d="M28.293 8.00003L24 3.70703V7.50003C24 7.77503 24.225 8.00003 24.5 8.00003H28.293Z" fill="white" />
      <path
        opacity="0.64"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.56 7.854L24.146 2.439C23.8642 2.15891 23.4833 2.00117 23.086 2H9.5C8.673 2 8 2.673 8 3.5V28.5C8 29.327 8.673 30 9.5 30H28.5C29.327 30 30 29.327 30 28.5V8.914C30 8.514 29.844 8.137 29.56 7.854ZM24 3.707L28.293 8H24.5C24.2241 7.99945 24.0005 7.77591 24 7.5V3.707ZM9.5 29H28.5C28.775 29 29 28.775 29 28.5V9H24.5C23.673 9 23 8.327 23 7.5V3H9.5C9.225 3 9 3.225 9 3.5V28.5C9.00055 28.7759 9.22409 28.9995 9.5 29Z"
        fill="#605E5C"
      />
      <path
        d="M21 18L20 17H18L17 18V20.973C17.911 22.197 19.357 23 21 23C22.3261 23 23.5979 22.4732 24.5355 21.5355C25.4732 20.5979 26 19.3261 26 18H21Z"
        fill="#ED6C47"
      />
      <path d="M17 15.027V18H21V13C19.357 13 17.911 13.803 17 15.027Z" fill="#FF8F6B" />
      <path d="M22 12C24.7614 12 27 14.2386 27 17H22V12Z" fill="#FFC7B5" />
      <path
        d="M3.5 25H14.5C15.3284 25 16 24.3284 16 23.5V12.5C16 11.6716 15.3284 11 14.5 11H3.5C2.67157 11 2 11.6716 2 12.5V23.5C2 24.3284 2.67157 25 3.5 25Z"
        fill="#C43E1C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6392 14.66C11.1492 14.234 10.4452 14.02 9.52423 14.02H6.78223V22H7.96223L7.96723 19.184H9.43423C10.0212 19.184 10.5322 19.067 10.9782 18.842C11.4242 18.618 11.7732 18.309 12.0142 17.904C12.2562 17.5 12.3722 17.034 12.3722 16.514C12.3722 15.705 12.1272 15.087 11.6392 14.66ZM9.57723 18H7.96223V15H9.62423C10.6132 15 11.1612 15.66 11.1612 16.539C11.1612 16.992 10.9782 17.411 10.7202 17.647C10.4622 17.882 10.0802 18 9.57723 18Z"
        fill="white"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
