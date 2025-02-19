<template>

    <div class="display-6 text-primary">Computed Property</div>
    
    <p>Calculation :  {{ dollar }} * {{ rupees }} - {{ discount }} = {{ (dollar * rupees) - discount }}</p>
    
    <p>Calculation :  {{ dollar }} * {{ rupees }} - {{ discount }} = {{ total }}</p>
</template>

<script>
export default {
    name: 'ComputedProperty',
    data() {
        return {
            dollar: 100,
            rupees: 1,
            discount: 5
        };
    },
    computed: {
        total() {
            return (this.dollar * this.rupees) - this.discount;
        }
    }
}
</script>