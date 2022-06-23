import openInEditor from './launch-editor-middleware'

export default function (app) {
  app.use('/__open-in-editor', openInEditor('code'))
}
