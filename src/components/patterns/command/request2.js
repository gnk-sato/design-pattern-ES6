import RequestBase from './requestBase';

export default class Request2 extends RequestBase {
    procRequest(){
        return [
            this.service.serviceB(),
            this.service.serviceA(),
            this.service.serviceC()
        ];
    }
}
