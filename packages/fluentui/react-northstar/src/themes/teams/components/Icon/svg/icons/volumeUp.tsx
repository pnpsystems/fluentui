import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="0 0 20 20">
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9961 3.00614C11.9961 2.13312 10.9558 1.67929 10.3159 2.27314L6.44369 5.86652C6.35122 5.95234 6.22973 6.00002 6.10358 6.00002H3.49609C2.66767 6.00002 1.99609 6.67159 1.99609 7.50002V12.5C1.99609 13.3284 2.66767 14 3.49609 14H6.10358C6.22973 14 6.35122 14.0477 6.44369 14.1335L10.3159 17.7269C10.9558 18.3208 11.9961 17.8669 11.9961 16.9939V3.00614ZM7.12392 6.59952L10.9961 3.00614V16.9939L7.12392 13.4005C6.84651 13.1431 6.48204 13 6.10358 13H3.49609C3.21995 13 2.99609 12.7762 2.99609 12.5V7.50002C2.99609 7.22388 3.21995 7.00002 3.49609 7.00002H6.10358C6.48204 7.00002 6.84651 6.85696 7.12392 6.59952Z"
        />
        <path d="M15.2557 4.62761C15.4614 4.44334 15.7775 4.46068 15.9617 4.66635C18.678 7.69793 18.678 12.3021 15.9618 15.3337C15.7775 15.5393 15.4614 15.5567 15.2557 15.3724C15.0501 15.1881 15.0327 14.872 15.217 14.6664C17.5929 12.0145 17.5929 7.98545 15.217 5.33365C15.0327 5.12799 15.05 4.81188 15.2557 4.62761Z" />
        <path d="M14.0804 12.9332C13.8412 12.7954 13.7589 12.4897 13.8967 12.2504C14.6729 10.9029 14.7284 9.19161 13.8961 7.74993C13.758 7.51078 13.8399 7.20498 14.0791 7.06691C14.3182 6.92884 14.624 7.01078 14.7621 7.24993C15.7801 9.0132 15.7103 11.1054 14.7633 12.7495C14.6254 12.9888 14.3197 13.0711 14.0804 12.9332Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M12 3.00613C12 2.13311 10.9597 1.67928 10.3198 2.27313L6.4476 5.86651C6.35513 5.95232 6.23364 6.00001 6.10749 6.00001H3.5C2.67157 6.00001 2 6.67158 2 7.50001V12.5C2 13.3284 2.67157 14 3.5 14H6.10749C6.23364 14 6.35513 14.0477 6.4476 14.1335L10.3198 17.7269C10.9597 18.3207 12 17.8669 12 16.9939V3.00613Z" />
        <path d="M15.2537 4.62764C15.4594 4.44337 15.7755 4.46071 15.9598 4.66638C18.676 7.69797 18.676 12.3021 15.9598 15.3337C15.7756 15.5394 15.4594 15.5567 15.2538 15.3724C15.0481 15.1882 15.0308 14.872 15.215 14.6664C17.591 12.0146 17.591 7.98548 15.215 5.33369C15.0307 5.12802 15.0481 4.81191 15.2537 4.62764Z" />
        <path d="M14.0785 12.9333C13.8393 12.7954 13.757 12.4897 13.8948 12.2504C14.671 10.9029 14.7265 9.19163 13.8942 7.74995C13.7561 7.5108 13.838 7.205 14.0772 7.06693C14.3163 6.92886 14.6221 7.0108 14.7602 7.24995C15.7782 9.01322 15.7084 11.1054 14.7614 12.7496C14.6235 12.9888 14.3178 13.0711 14.0785 12.9333Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
