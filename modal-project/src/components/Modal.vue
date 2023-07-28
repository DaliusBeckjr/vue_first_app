        <script>
            export default {
                // props: ['header', 'text', 'theme'],
                props: ['theme'],
                methods: {
                    closeModal() {
                        this.$emit('close')
                    }
                }
            }
        </script>


<template>
    <!-- now if we click inside the modal it wont disappear but when click on backdrop it -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<!-- using scoped in style tag means it only effects anything that is on this file in our modal -->
<style scoped >
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        text-align: center;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }

    .sale {
        background: crimson;
        color: white;
    }
    .sale h1 {
        color: white;
    }

    .actions {
        text-align: center;
        margin: 30px 0 10px 0;
        color: #333;
    }
</style>