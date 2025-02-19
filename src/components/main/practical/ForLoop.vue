<template>
    <div class="display-6 text-primary">For Loop</div>
    <ul>
        <li v-for="tech in technologies" :key="tech"> {{ tech }}</li>        
    </ul>
    <br />
    <ul>
        <li v-for="client in user" :key="client">
            {{`Name: ${client.name}, Age: ${client.age}, Email: ${client.email}, Phone: ${client.phone}, Address: ${client.address.street}, ${client.address.city}, ${client.address.state}, ${client.address.zip}` }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ForLoop',
    data() {
        return {
            technologies: ['html', 'css', 'js', 'vue', 'react', 'angular', 'node', 'python', 'c#' , 'c++', 'java', 'php', 'asp.net', 'asp.net core', 'spring', 'spring boot', 'spring mvc', 'spring security' ], // list of technologies for loop
            user: [
                {
                    name: 'John Doe',
                    age: 30,
                    email: 'johndoe@example.com',
                    phone: '1234567890',
                    address: {
                        street: '123 Main St',
                        city: 'New York',
                        state: 'NY',
                        zip: '12345',
                    },
                },
                {
                    name: 'Khan',
                    age: 25,
                    email: 'khan@example.com',
                    phone: '9876543210',
                    address: {
                        street: '456 Elm St',
                        city: 'Los Angeles',
                        state: 'CA',
                        zip: '98765',
                    },
                },
            ],
        }
    }
}
</script>
