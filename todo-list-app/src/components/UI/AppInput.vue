<template>
  <input
    v-if="inputType === 'text'"
    :id="inputId"
    :type="inputType"
    :value="modelValue"
    :placeholder="inputPlaceholder"
    @input="updateInput"
    class="input__text"
  />
  <label class="container" v-else-if="inputType === 'checkbox'" :for="inputId">
    <strong>{{ inputLabel }}</strong>
    <input
      :type="inputType"
      :checked="modelValue"
      @change="updateInputCheckbox"
      :id="inputId"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
name: 'AppInput';

const emit = defineEmits(['update:modelValue']);

//props
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
  },
  inputType: {
    type: String,
    required: true,
  },
  inputLabel: {
    type: String,
  },
  inputId: {
    type: String,
  },
  inputPlaceholder: {
    type: String,
  },
});

//methods
function updateInput(event) {
  emit('update:modelValue', event.target.value);
}

function updateInputCheckbox(event) {
  emit('update:modelValue', event.target.checked);
}
</script>

<style scoped>
.input__text {
  border: 1px solid transparent;
  padding: 10px 15px;
  outline: none;
  width: 100%;
  background: var(--color-background-item);
  box-shadow: 0 6px 16px 0px rgba(0, 0, 0, 0.16),
    0 4px 20px 0 rgba(0, 0, 0, 0.19);
}

.input__text:focus {
  border: 1px solid var(--color-border);
}

::placeholder {
  color: #a9a9a9;
}

/* The container */
.container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  height: 15px;
  width: 15px;
  margin-top: 5px;
  margin-left: 5px;
  border: 1px solid var(--color-border);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: var(--color-background-detail);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  bottom: 4px;
  width: 5px;
  height: 15px;
  border: solid var(--color-text);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
