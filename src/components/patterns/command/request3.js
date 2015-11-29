import RequestBase from './requestBase';

export default class Request3 extends RequestBase {
    procRequest(){
        return [
            this.service.serviceB(),
            this.service.serviceA(),
        ];
    }
}
