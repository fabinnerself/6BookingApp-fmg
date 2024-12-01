import React from 'react';

const Logo1 = ({ colors, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 156 171" 
      className={className}
    >
      <path
        d="
          M84.000000,172.000000 
          C56.000004,172.000000 28.500006,172.000000 1.000007,172.000000 
          C1.000005,115.000008 1.000005,58.000019 1.000003,1.000023 
          C52.999985,1.000015 104.999969,1.000015 156.999969,1.000008 
          C156.999969,57.999973 156.999969,114.999947 156.999985,171.999969 
          C132.833328,172.000000 108.666664,172.000000 84.000000,172.000000 
          M76.666664,57.316433 
          C68.521019,49.262653 60.576530,40.987209 52.101452,33.296459 
          C49.704006,31.120886 45.581688,29.329214 42.561954,29.726892 
          C38.466995,30.266169 36.637012,34.230663 35.969860,38.625267 
          C33.186268,56.961040 29.915442,75.224808 27.297632,93.582626 
          C26.481976,99.302544 27.160841,105.235580 27.209034,111.759460 
          C29.221571,114.559235 30.914406,117.672539 33.300640,120.105835 
          C45.167915,132.207184 57.212223,144.135040 69.205597,156.112549 
          C75.472687,162.371368 78.899597,162.420959 85.087738,156.251221 
          C98.865074,142.514862 112.620934,128.756866 126.346832,114.969139 
          C127.491096,113.819725 128.343033,112.379265 129.939346,110.901443 
          C136.836380,104.173378 143.789307,97.501335 150.609741,90.696510 
          C154.786591,86.529213 154.768341,81.786476 150.563278,77.555954 
          C137.660492,64.575027 124.725227,51.625641 111.712273,38.755322 
          C106.196091,33.299610 102.334755,33.405846 96.737038,38.918377 
          C90.331589,45.226341 84.005554,51.614960 77.523483,57.695065 
          C77.523483,57.695065 77.249634,57.802353 76.666664,57.316433 
        "
        className={colors?.outer || 'fill-white'}
      />
      <path
        d="
          M129.330780,111.074020 
          C128.343033,112.379265 127.491096,113.819725 126.346832,114.969139 
          C112.620934,128.756866 98.865074,142.514862 85.087738,156.251221 
          C78.899597,162.420959 75.472687,162.371368 69.205597,156.112549 
          C57.212223,144.135040 45.167915,132.207184 33.300640,120.105835 
          C30.914406,117.672539 29.221571,114.559235 27.436232,111.185257 
        "
        className={colors?.middle || 'fill-purple-500'}
      />
      <path
        d="
          M129.635071,110.987732 
          C113.618515,95.234497 97.905663,79.395561 82.195000,63.554451 
          C80.788162,62.135933 79.395584,60.703281 77.719315,58.866547 
        "
        className={colors?.frontPath || 'fill-green-400'}
      />
      <path
        d="
          M77.477173,57.906071 
          C60.171322,75.359169 47.084606,88.325165 34.195724,101.484627 
          C31.608883,104.125778 29.820150,107.548622 27.409485,110.841049 
        "
        className={colors?.backPath || 'fill-pink-400'}
      />
      <path
        d="
          M129.635071,110.987732 
          C113.618515,95.234497 97.905663,79.395561 82.195000,63.554451 
          C80.788162,62.135933 79.395584,60.703281 77.719315,58.866547 
          C84.005554,51.614960 90.331589,45.226341 96.737038,38.918377 
          C102.334755,33.405846 106.196091,33.299610 111.712273,38.755322 
        "
        className={colors?.finalPath || 'fill-blue-500'}
      />
    </svg>
  );
};

export default Logo1;