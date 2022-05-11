/*
 * @Author: feiosme
 * @LastEditors: Please set LastEditors
 * @Description:
 */
module.exports = {
    content: ['./src/**/*.{vue,js}'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                bounceIn: {
                    '0%': { opacity: '0',transform: 'scale3d(0.3, 0.3, 0.3)'},
                    '33%': {transform: 'scale3d(1.1, 1.1, 1.1)'},
                    '66%': {opacity: '1',transform: 'scale3d(0.97, 0.97, 0.97)'},
                    to: { opacity: '1',transform: 'scale3d(1, 1, 1)'}
                },
                bounceInOld: {
                    '0%': { opacity: '0',transform: 'scale3d(0.3, 0.3, 0.3)'},
                    '20%': {transform: 'scale3d(1.1, 1.1, 1.1)'},
                    '40%': {transform: 'scale3d(0.9, 0.9, 0.9)'},
                    '60%': {opacity: '1',transform: 'scale3d(1.03, 1.03, 1.03)'},
                    '80%': {transform: 'scale3d(0.97, 0.97, 0.97)'},
                    to: { opacity: '1',transform: 'scale3d(1, 1, 1)'}
                },
                slideInDown: {
                    from: {transform: 'translate3d(0, -100%, 0)',visibility: 'visible'},
                    to: {transform: 'translate3d(0, 0, 0)'}
                },
                slideInUp: {
                    from: {transform: 'translate3d(0, 100%, 0)',visibility: 'visible'},
                    to: {transform: 'translate3d(0, 0, 0)'}
                },
                slideInLeft: {
                    from: {transform: 'translate3d(-100%, 0, 0)',visibility: 'visible'},
                    to: {transform: 'translate3d(0, 0, 0)'}
                },
                slideInRight: {
                    from: {transform: 'translate3d(100%, 0, 0)',visibility: 'visible'},
                    to: {transform: 'translate3d(0, 0, 0)'}
                },
                fadeIn: {
                    from: {opacity: '0'},
                    to: {opacity: '1'}
                },
                fadeInDown: {
                    from: {transform: 'translate3d(0, -100%, 0)', opacity: '0'},
                    to: {transform: 'translate3d(0, 0, 0)', opacity: '1'}
                },
                fadeInUp: {
                    from: {transform: 'translate3d(0, 100%, 0)', opacity: '0'},
                    to: {transform: 'translate3d(0, 0, 0)', opacity: '1'}
                },
                fadeInLeft: {
                    from: {transform: 'translate3d(-100%, 0, 0)', opacity: '0'},
                    to: {transform: 'translate3d(0, 0, 0)', opacity: '1'}
                },
                fadeInRight: {
                    from: {transform: 'translate3d(100%, 0, 0)', opacity: '0'},
                    to: {transform: 'translate3d(0, 0, 0)', opacity: '1'}
                },
                fadeInRightSm: {
                    from: {transform: 'translate3d(40%, 0, 0)', opacity: '0'},
                    to: {transform: 'translate3d(0, 0, 0)', opacity: '1'}
                },
                shakeX: {
                    from: {},
                    to: {transform: 'translate3d(0, 0, 0)}'},
                    '10%, 30%, 50%, 70%, 90%': {transform: 'translate3d(-10px, 0, 0)'},
                    '20%, 40%, 60%, 80%': {transform: 'translate3d(10px, 0, 0)'}
                },
                headShake: {
                    '0%': {transform: 'translateX(0)'},
                    '6.5%': {transform: 'translateX(-6px) rotateY(-9deg)'},
                    '18.5%': {transform: 'translateX(5px) rotateY(7deg)'},
                    '31.5%': {transform: 'translateX(-3px) rotateY(-5deg)'},
                    '43.5%': {transform: 'translateX(2px) rotateY(3deg)'},
                    '50%': {transform: 'translateX(0)'}
                },
                zoomOutLeft: {
                    '40%': {opacity: '1',transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)'},
                    to: {opacity: '0',transform: 'scale(0.1) translate3d(-2000px, 0, 0)'}
                },
                zoomInLeft: {
                    from: {opacity: '0',transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)'},
                    '60%': {opacity: '1',transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)'}
                },
                zoomIn: {
                    from: {opacity: '0',transform: 'scale3d(0.3, 0.3, 0.3)'},
                    '50%': {opacity: '1'}
                },
                loading: {
                    to: {transform: 'rotate(360deg)'}
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                wiggleSlow: 'wiggle 10s ease-in-out infinite',
                bounceIn: 'bounceIn .4s cubic-bezier(0.215, 0.61, 0.355, 1)',
                bounceInOld: 'bounceInOld .4s cubic-bezier(0.215, 0.61, 0.355, 1)',
                slideInDown: 'slideInDown .4s cubic-bezier(0, 1, 0.95, 1.05)',
                slideInUp: 'slideInUp .4s cubic-bezier(0, 0, 0.2, 1)',
                fadeIn: 'fadeIn .3s ease-in-out',
                fadeInDown: 'fadeInDown .3s cubic-bezier(0, 1, 0.95, 1.05)',
                fadeInUp: 'fadeInUp .3s cubic-bezier(0, 1, 0.95, 1.05)',
                fadeInLeft: 'fadeInLeft .3s cubic-bezier(0, 1, 0.95, 1.05)',
                fadeInRight: 'fadeInRight .3s cubic-bezier(0, 1, 0.95, 1.05)',
                fadeInRightSm: 'fadeInRightSm .3s cubic-bezier(0.17, 0.17, 0.23, 1)',
                shakeX: 'shakeX 1s ease-in-out infinite',
                headShake: 'headShake .6s ease-in-out',
                zoomOutLeft: 'zoomOutLeft .6s ease-in-out',
                zoomInLeft: 'zoomInLeft .6s ease-in-out',
                zoomIn: 'zoomIn .3s cubic-bezier(0.17, 0.17, 0.23, 1)',
                slideInLeft: 'slideInLeft .6s cubic-bezier(0, 1, 0.95, 1.05)',
                slideInRight: 'slideInRight .6s cubic-bezier(0, 1, 0.95, 1.05)',
                loading: 'loading .5s linear infinite'
            }
        }
    },
    plugins: []
};
