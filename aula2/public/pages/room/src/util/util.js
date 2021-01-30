class Util{
    static sleep(ms){
        return new Promise(rm => setTimeout(rm, ms));
    }
}