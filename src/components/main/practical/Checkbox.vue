<template>
    <div class="display-6 text-primary">CheckBox Code</div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" v-model="vehicles" />
        <label for="vehicle1"> I have a bike</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" v-model="vehicles" />
        <label for="vehicle2"> I have a car</label><br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" v-model="vehicles" />
        <label for="vehicle3"> I have a boat</label><br /><br />
        <input type="submit" value="Submit" v-on:click="getData()" />
        <br /><br />
        <h5>selected vehicle: {{ vehicles }}</h5>    
</template>

<script>
export default {
    name: 'Checkbox',
    data() {
        return {
            vehicles: [],
        };
    },
    methods: {
        getData() {
            alert(this.vehicles);
        },
    },
    beforeUnmount() {
        console.log("beforeMounted");
        alert("this checkbox will hide");
    },
    unmounted() {
        console.log("checkbox is hidden");
    }
}
</script>