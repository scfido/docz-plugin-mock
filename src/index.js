import { createPlugin } from 'docz-core'
import getMockMiddleware from './mockMiddleware'
import path from 'path'

export default function(){
    return createPlugin({
        onPreCreateApp: (app) => {
            app.use(getMockMiddleware(path.join(process.cwd(), '/')));
        }
    })
} 