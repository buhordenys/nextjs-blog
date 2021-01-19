import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
    withTranslation: () => Component => {
        Component.defaultProps = {
            ...Component.defaultProps,
            t: key => key,
            i18n: {
                language: 'en',
                changeLanguage: jest
                    .fn()
                    .mockImplementation(
                        (lang) => console.log(lang)
                    )
            }
        };
        return Component;
    },
}));

jest.mock('next/config', () => ({
    default: () => ({
        publicRuntimeConfig: {
            localeSubpaths: {}
        }
    })
}));

jest.mock('next/router', () => ({
    useRouter: () => ({
        route: '/',
        pathname: '/projects',
        query: '',
        asPath: '',
    })
}));

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});