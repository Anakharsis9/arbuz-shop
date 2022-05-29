import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export const useOrderValidators = (order) => {
  const notZero = (value) => value > 0;
  const requiredMsg = "Поле не должно быть пустым";

  const rules = {
    itemsCount: {
      required,
      notZero: {
        $validator: notZero,
        $message: "Минимум один арбуз",
      },
    },
    userInfo: {
      phone: {
        required: helpers.withMessage(requiredMsg, required),
      },
      address: {
        street: {
          required: helpers.withMessage(requiredMsg, required),
        },
      },
    },
  };

  const v$ = useVuelidate(rules, order);

  return {
    v$,
  };
};
