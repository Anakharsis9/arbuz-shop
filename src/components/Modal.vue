<script setup>
defineProps({
  show: Boolean,
});
const emits = defineEmits(["close"]);

function close() {
  emits("close");
}
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal__header" id="modalTitle">
          <slot name="header"> </slot>

          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close Modal"
          >
            <img src="@/assets/icons/close.svg" />
          </button>
        </header>

        <main class="modal__body" id="modalDescription">
          <slot name="body"> Default body content </slot>
        </main>

        <footer class="modal__footer">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  // width: 80%;
  max-width: 450px;
  min-width: 320px;

  &__header,
  &__footer {
    padding: 15px;
    display: flex;
  }

  &__header {
    position: relative;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  &__footer {
    flex-direction: column;
    justify-content: flex-end;
  }

  &__body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
  }
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #3b3b3b;
  background: transparent;

  img{
    width: 16px;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
