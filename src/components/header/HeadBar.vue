<template>
    <div class="bg-violet">
        <div class="container">            
            <div class="d-flex justify-content-space align-items-center">
                <div class="d-flex align-items-center py-2 fs-12">
                    <a href="mailto:demo@example.com" class="me-4 text-white text-decoration-none">
                       <font-awesome-icon :icon="['fas', 'envelope']" class="me-1"/> demo@example.com
                    </a>
                    <a href="tel:+123456789" class="text-white text-decoration-none"><font-awesome-icon :icon="['fas', 'phone']" class="me-1"/> 123456789</a>
                </div>
                <span></span>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeadBar',
    };
</script>