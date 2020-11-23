import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M6.20712 4L2 8.20712V6.79291L4.79291 4H6.20712Z" />
        <path d="M3.5 16H5V14.2929L3.30542 15.9875C3.36911 15.9957 3.43406 16 3.5 16Z" />
        <path d="M15.2072 16H15V14.793L18.0001 11.7929V13.2071L15.2072 16Z" />
        <path d="M18.0001 9.70712L14.9021 12.8051C14.8032 12.4623 14.6328 12.1498 14.4082 11.8848L18.0001 8.29291V9.70712Z" />
        <path d="M12.5 12C12.9889 12 13.4232 12.2339 13.697 12.5959C13.8872 12.8473 14 13.1605 14 13.5V16H13V13.5C13 13.2239 12.7761 13 12.5 13H7.5C7.22386 13 7 13.2239 7 13.5V16H6V13.5C6 13.424 6.00565 13.3493 6.01656 13.2764C6.11363 12.627 6.62697 12.1136 7.27637 12.0166C7.34933 12.0057 7.42401 12 7.5 12H12.5Z" />
        <path d="M9.72239 10.9848C9.34017 10.9425 8.98392 10.8141 8.67349 10.6194C8.24896 10.3532 7.91012 9.96289 7.70775 9.49937C7.57412 9.19331 7.5 8.85531 7.5 8.5C7.5 8.42712 7.50312 8.35497 7.50923 8.28368C7.61278 7.07554 8.57554 6.11278 9.78368 6.00923C9.85497 6.00312 9.92712 6 10 6C10.3553 6 10.6933 6.07412 10.9994 6.20775C11.4629 6.41012 11.8532 6.74896 12.1194 7.1735C12.3141 7.48393 12.4425 7.84018 12.4848 8.22239C12.4948 8.31354 12.5 8.40617 12.5 8.5C12.5 9.88071 11.3807 11 10 11C9.90617 11 9.81354 10.9948 9.72239 10.9848ZM10 10C10.8284 10 11.5 9.32843 11.5 8.5C11.5 7.67157 10.8284 7 10 7C9.17157 7 8.5 7.67157 8.5 8.5C8.5 9.32843 9.17157 10 10 10Z" />
        <path d="M2.11948 15.0876L6.96417 10.243C6.78356 9.92904 6.65024 9.58448 6.57392 9.21899L2 13.7929V14.5C2 14.7086 2.04256 14.9072 2.11948 15.0876Z" />
        <path d="M11.743 5.46417C11.429 5.28356 11.0845 5.15023 10.719 5.07392L11.7929 4H13.2071L11.743 5.46417Z" />
        <path d="M13.3195 7.38763C13.2066 7.05038 13.0437 6.73604 12.8396 6.45338L15.293 4H16.5C16.566 4 16.6309 4.00426 16.6947 4.01251L13.3195 7.38763Z" />
        <path d="M12.4495 11C12.8886 10.5697 13.2148 10.0246 13.3796 9.41331L17.8806 4.91235C17.9575 5.09281 18.0001 5.29143 18.0001 5.49999V6.20709L13.1277 11.0795C12.9271 11.0276 12.7168 11 12.5 11H12.4495Z" />
        <path d="M2 11.7071L9.70712 4H8.29291L2 10.2929V11.7071Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M6.20712 4L2 8.20712V6.79291L4.79291 4H6.20712Z" />
        <path d="M13.2071 4L11.743 5.46417C11.429 5.28356 11.0845 5.15023 10.719 5.07392L11.7929 4H13.2071Z" />
        <path d="M12.1194 7.1735C11.8532 6.74896 11.4629 6.41012 10.9994 6.20775C10.6933 6.07412 10.3553 6 10 6C9.92712 6 9.85497 6.00312 9.78368 6.00923C8.57554 6.11278 7.61278 7.07554 7.50923 8.28368C7.50312 8.35497 7.5 8.42712 7.5 8.5C7.5 8.85531 7.57412 9.19331 7.70775 9.49937C7.91012 9.96289 8.24896 10.3532 8.67349 10.6194C8.98392 10.8141 9.34017 10.9425 9.72239 10.9848C9.81354 10.9948 9.90617 11 10 11C11.3807 11 12.5 9.88071 12.5 8.5C12.5 8.40617 12.4948 8.31354 12.4848 8.22239C12.4425 7.84018 12.3141 7.48393 12.1194 7.1735Z" />
        <path d="M12.8396 6.45338C13.0437 6.73604 13.2066 7.05038 13.3195 7.38763L16.6947 4.01251C16.6309 4.00426 16.566 4 16.5 4H15.293L12.8396 6.45338Z" />
        <path d="M7.5 12C7.42401 12 7.34933 12.0057 7.27637 12.0166C6.62697 12.1136 6.11363 12.627 6.01656 13.2764C6.00565 13.3493 6 13.424 6 13.5V16H14V13.5C14 13.1605 13.8872 12.8473 13.697 12.5959C13.4232 12.2339 12.9889 12 12.5 12H7.5Z" />
        <path d="M12.5 11C12.7168 11 12.9271 11.0276 13.1277 11.0795L18.0001 6.20709V5.49999C18.0001 5.29143 17.9575 5.09281 17.8806 4.91235L13.3796 9.41331C13.2148 10.0246 12.8886 10.5697 12.4495 11H12.5Z" />
        <path d="M14.4082 11.8848C14.6328 12.1498 14.8032 12.4623 14.9021 12.8051L18.0001 9.70712V8.29291L14.4082 11.8848Z" />
        <path d="M15 16V14.793L18.0001 11.7929V13.2071L15.2072 16H15Z" />
        <path d="M5 15.7071V14.2929L3.30542 15.9875C3.36911 15.9957 3.43406 16 3.5 16H4.70713L5 15.7071Z" />
        <path d="M6.57392 9.21899C6.65024 9.58448 6.78356 9.92904 6.96417 10.243L2.11948 15.0876C2.04256 14.9072 2 14.7086 2 14.5V13.7929L6.57392 9.21899Z" />
        <path d="M9.70712 4L2 11.7071V10.2929L8.29291 4H9.70712Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
