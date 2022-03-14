import ValidationError from "./ValidationError.js";
export default class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("Required property: " + property + " not set");
      this.property = property;
    }
}