import Car from './Car';
import { Console } from "@woowacourse/mission-utils";
import { 
    CAR_NAME_NULL_ERROR_MESSAGE,
    CAR_NAME_INVALID_ERROR_MESSAGE,
    RACE_RESULT_MESSAGE,
    RACE_TIME_ERROR_MESSAGE,
    CREATE_CAR_ERROR_MESSAGE,
} from "./Define";

export const VALIDATE_CAR_NAME = (CAR_NAME_INPUT) => {
    if (!CAR_NAME_INPUT) {
        throw new Error(CAR_NAME_NULL_ERROR_MESSAGE);
    }
    const CAR_NAMES = INPUT.split(',');
    if (CAR_NAMES.some(CAR_NAME => CAR_NAME.trim().length > 5)) {
        throw new Error(CAR_NAME_INVALID_ERROR_MESSAGE);
    }
}

export const CREATE_CARS = (CAR_NAMES) => {
    if (CAR_NAMES.length < 1) {
        throw new Error(CREATE_CAR_ERROR_MESSAGE);
    }
    return CAR_NAMES.map(CAR_NAME => new Car(CAR_NAME));
}

export const VALIDATE_RACE_TIME = (RACE_TIME_INPUT) =>  {
    const RACE_TIME = parseInt(RACE_TIME_INPUT, 10);
    if (isNaN(RACE_TIME) || RACE_TIME <= 0) {
      throw new Error(RACE_TIME_ERROR_MESSAGE);
    }
    return RACE_TIME;
}

export const RACE_RUN = (CARS, RACE_TIMES) => {
    Console.print(RACE_RESULT_MESSAGE);
    for (let i = 0; i < RACE_TIMES; i++) {
        CARS.forEach(CAR => CAR.move());
        CARS.forEach(CAR => Console.print(CAR.toString()));
        Console.print('');
    }
}