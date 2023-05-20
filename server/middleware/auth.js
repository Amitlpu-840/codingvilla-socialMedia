import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

         let decodedData;
         console.log("in custom");
         if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test');
            // console.log(decodedData);

            console.log(decodedData?.id);
            req.userId = decodedData?.id;
            // console.log(req.userId);

         }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
            console.log("in oauth");
         }
         next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;