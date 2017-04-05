let BaseEventListeners = new Map();

export default class Base {

    constructor(config) {

        // Maybe will need some config later

    }

    on(event, handler, context) {

        if (!BaseEventListeners.has(this)) BaseEventListeners.set(this, {});

        let tbel = BaseEventListeners.get(this);

        if (!tbel[event]) tbel[event] = [];
        tbel[event].push({handler, context});

    }

    off(event, handler, context) {

        let tbel = BaseEventListeners.get(this);

        if (!tbel) return;

        // if no event given - clear all events
        if (!event) {
            Object.keys(this._listeners).forEach(key => delete this._listeners[key]);
            return;
        }
        if (!tbel[event]) return;
        // if no handler given or no event listeners found - clear the event key
        if (!tbel[event].length || !handler) {
            delete tbel[event];
            return;
        }
        // filter event this._listeners by != handler, context
        tbel[event] = tbel[event].filter(hc => {

            if (context) {
                return hc.handler !== handler || hc.context !== context;
            }

            return hc.handler !== handler;

        });

    }

    once(event, handler, context) {

        if (!BaseEventListeners.has(this)) BaseEventListeners.set(this, {});

        let tbel = BaseEventListeners.get(this);

        let fn = (...data) => {
            handler && handler.apply(context || null, data);
            this.off(tbel, event, handler, context);
        };

        this.on(event, fn);

    }

    fire(event, ...data) {

        let tbel = BaseEventListeners.get(this);
        if (!tbel) return;
        tbel[event] && tbel[event].forEach(hc => {
            hc.handler && hc.handler.apply(hc.context || null, data);
        });
    }

};