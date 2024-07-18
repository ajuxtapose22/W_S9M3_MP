import { useLocalStorage } from '../hooks/useLocalStorage';

export function useDarkMode() {
    const [dark, setDark] = useLocalStorage('darkmode', false)
    return [dark, setDark]
}