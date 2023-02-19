<template>
  <form class="form_input">
    <input
      v-if="inputType === 'text'"
      :id="inputId"
      :type="inputType"
      :value="modelValue"
      :placeholder="inputPlaceholder"
      @input="updateInput"
      class="input input__text"
    />
    <label
      class="container"
      v-else-if="inputType === 'checkbox'"
      :for="inputId"
    >
      <strong>{{ inputLabel }}</strong>
      <input
        :type="inputType"
        :checked="modelValue"
        @change="updateInputCheckbox"
        :id="inputId"
      />
      <span class="checkmark"></span>
    </label>
  </form>
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
.form_input {
  display: flex;
  margin-top: 15px;
}

.input {
  border: 1px solid teal;
  padding: 10px 15px;
  outline-color: teal;
}

.input__text {
  width: 100%;
}

/* The container */
.container {
  display: block;
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
  top: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: teal;
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
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
