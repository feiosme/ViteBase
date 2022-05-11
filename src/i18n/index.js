import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
    const locales = import.meta.globEager('./locales/[[:lower:]][[:lower:]]-[[:lower:]][[:lower:]].json');
    const messages = {};
    Object.keys(locales).forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales[key].default;
        }
    });
    return messages;
}

export default createI18n({
    legacy: false,
    locale: localStorage.getItem('language') || (navigator.language || navigator.browserLanguage).toLowerCase() || process.env.VUE_APP_I18N_LOCALE || 'en-us',
    fallbackLocale: localStorage.getItem('language') || (navigator.language || navigator.browserLanguage).toLowerCase() || process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-us',
    messages: loadLocaleMessages()
});
