export default class Test {
    constructor(question, id, sound_path, image_path, answers_json, is_multiple) {
        this.id = id;
        this.question = question;
        this.sound_path = sound_path;
        this.image_path = image_path;
        this.answers_json = answers_json;
        this.is_multiple = is_multiple;
    }
}