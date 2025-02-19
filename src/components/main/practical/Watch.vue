<template>
    <div class="display-6 text-primary">Watcher</div>

    <h2>Count: {{ count }}</h2>
    <button @click="count = count + 1" class="btn btn-primary me-3">Increment Count</button>
    <button @click="count = count - 1" class="btn btn-secondary">Decrement Count</button>
</template>
<script>
export default {
    name: 'Watcher',
    data() {
        return {
            count: 0
        }
    },
    watch: {
        count(newValue, prevValue) {
            if (newValue > 10 && newValue > prevValue) {
                alert(`Count exceeded 10! Resetting to 0.`);
                this.count = 0;
            }
        }        
    }
}
</script>