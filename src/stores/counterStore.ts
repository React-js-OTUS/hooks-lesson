type Listener = () => void;

class CounterStore {
    private count: number = 0;
    private listeners: Listener[] = [];

    getCount() {
        return this.count;
    }

    increment() {
        this.count += 1;
        this.notify();
    }

    decrement() {
        this.count -= 1;
        this.notify();
    }

    subscribe(listener: Listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify() {
        this.listeners.forEach(listener => listener());
    }
}

const counterStore = new CounterStore();

export default counterStore;
