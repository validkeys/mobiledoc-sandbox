import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    mobiledocWasUpdated(updatedMobiledoc) {
      Ember.Logger.log('New mobiledoc:',updatedMobiledoc);
      // note that this action will be fired for every changed character,
      // so you may want to debounce API calls if you are using it for
      // an "autosave" feature.
    },
    willCreateEditor() {
      Ember.Logger.log('about to create the editor');
    },
    didCreateEditor(editor) {
      Ember.Logger.log('created the editor:', editor);
      const controller = this;

      editor.registerKeyCommand({
        str: 'enter',
        run(editor) {
          console.log('enter key hit');
        }
      });

      editor.registerKeyCommand({
        str: 'META+enter',
        run(editor) {
          console.log('META+enter key hit');
        }
      });

      editor.onTextInput({
        text: '@',
        run(editor) {
          console.log("@ sign typed", controller.set("showMentions"));
        }
      })

    }
  }
});
