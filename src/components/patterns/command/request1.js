import RequestBase from './requestBase';

export default class Request1 extends RequestBase {
    procRequest(){
        return [
            this.service.serviceA(),
            this.service.serviceB()
        ];
    }
}
