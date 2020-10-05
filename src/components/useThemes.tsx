import { useMemo } from 'react';
import * as themes from '@theme-ui/presets';

export const useThemes = () => {
  return useMemo(() => {
    return Object.keys(themes)
      .filter(name => name !== 'default')
      .sort()
      .map(name => ({ name, theme: themes[name]}))
  }, []);
}
