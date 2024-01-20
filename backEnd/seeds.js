const mongoose = require("mongoose");
const { ProjectModel } = require("./models/project");
const { BlogModel } = require("./models/blog");
const { faGamepad } = require("@fortawesome/free-solid-svg-icons");
const localDbUrl =
      "mongodb://127.0.0.1:27017/portfolio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0";
const hostedDbUrl =
      "mongodb+srv://aakashdeep954:a1S6mNXvLK0b158x@portfoliocluster.c1qp6ud.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose
      .connect(hostedDbUrl)
      .then(() => {
            console.log("connected to mongodb");
      })
      .catch((e) => {
            console.log(e);
      });
const projects = [
      {
            title: "Tetris (2.0)",
            keyFunctionalities: [
                  "simple,clean ,elegant experience",
                  "move current tetromino down ,right,left",
                  "destroying blocks",
                  "shifting blocks",
                  "continously dropping the current tetromino of each player",
                  "update score",
                  "generate random tetrominos for every new game",
                  "single player",
                  "couch play(2 players in one screen side by side)",
                  "only controller supporrt, only keyboard support, keyboard and controller mix support",
                  "whole app navigation support with controller",
                  "customize keybindings for controller and keyboard",
                  "multiple players on single keyboard support",
                  "sounds for button presses,game sounds",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg",
            introduction: `A web-based Tetris game!
            Immerse yourself in the classic world of
           falling blocks and strategy as you challenge
           your skills and aim for high scores. Get
           ready to experience Tetris like never
           before, right in your web browser`,
            icon: "faGamepad",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971708/tetris-2.0/one_egzbtu.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971710/tetris-2.0/two_gf8jjc.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971713/tetris-2.0/three_l8jpe2.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971716/tetris-2.0/four_ultzjq.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971721/tetris-2.0/five_mwfwta.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971724/tetris-2.0/six_ehz62q.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971727/tetris-2.0/seven_ns2rpr.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971730/tetris-2.0/eight_d6myev.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971737/tetris-2.0/nine_qxpqjt.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704971739/tetris-2.0/ten_fr452x.png",
            ],
            liveLink: "https://tetris-2.vercel.app/",
            gitHubLink:
                  "https://github.com/runtimeerror55/tetris-react-version",
      },
      {
            title: "Tetris (1.0)",
            keyFunctionalities: [
                  "move down",
                  "move right",
                  "move left",
                  "generate board nodes matrix",
                  "destroying blocks",
                  "ui renderer",
                  "shifting blocks",
                  "updating player binary matrix",
                  "isPossibletoMove",
                  "update score",
                  "update currentTetromino",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "ejs",
                  "express",
                  "express-session",
                  "passport",
                  "passport-local",
                  "passport-local-mongoose",
                  "mongoose",
                  "express",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/f760a057-5695-47ae-8b0e-0d5b90ece452.svg",
            introduction: `A web-based Tetris game!
             Immerse yourself in the classic world of
            falling blocks and strategy as you challenge
            your skills and aim for high scores. Get
            ready to experience Tetris like never
            before, right in your web browser`,
            icon: "faGamepad",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1705344538/tetris-1.0/one_uyrrfk.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1705344540/tetris-1.0/two_ygxhx1.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1705344541/tetris-1.0/three_bdfoxu.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1705344543/tetris-1.0/four_hhflqb.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1705344545/tetris-1.0/five_nauaek.png",
            ],
            liveLink: "https://www.google.com",
            gitHubLink: "https://github.com/runtimeerror55/tetris",
      },
      {
            title: "Touch typing (2.0)",
            keyFunctionalities: [
                  "typing test",
                  "reloading new paragraph any time (during the test, before the test , after the test)",
                  "restarting the test any time (during the test, before the test , after the test)",
                  "calculating wpm,accuracy of the test",
                  "save all the stats of that particular test",
                  "calculating all time stats ( avg wpm, avg accuracy, each letter avg accuracy) and showing them in stats page",
                  "calculating stats for last 10 tests (avg wpm ,avg accuracy)and showing them in stats page",
                  "showing timer during the test",
                  "sounds while typing",
                  "change different themes, timers , sounds in the settings and save them",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities(success and error)",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/27c10295-5e0f-4136-9d29-665ab1e01f95.svg",
            introduction:
                  "A web based touch typing. Experience simple,elegant,fast, clean touch typing and improve your typing skills",
            icon: "faKeyboard",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877513/touch-typing-2.0/one_pejfyj.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877514/touch-typing-2.0/two_qjjfrg.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704878047/touch-typing-2.0/three_qdgqtw.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877518/touch-typing-2.0/four_yozzis.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877519/touch-typing-2.0/five_r0byvd.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877521/touch-typing-2.0/six_ecpjjy.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704877523/touch-typing-2.0/seven_wxhjyl.png",
            ],
            liveLink: "https://touch-typing-2-steel.vercel.app/",
            gitHubLink: "https://github.com/runtimeerror55/typing-web-app",
      },
      {
            title: "Touch typing (1.0)",
            keyFunctionalities: [
                  "calculating wpm,accuracy of the test",
                  "save all the stats of that particular test",
                  "calculating all time stats ( avg wpm, avg accuracy, each letter avg accuracy) and showing them in stats page",
                  "calculating stats for last 10 tests (avg wpm ,avg accuracy)and showing them in stats page",
                  "showing timer during the test",
                  "sounds while typing",
                  "multiple themes, timers to choose from",
                  "showing test stats in the form of graph after every test",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "css",
                  "javscript",
                  "paperjs",
                  "howlerjs",
                  "plotlyjs",
                  "animejs",
                  "firebase",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg",
            introduction:
                  "A web based touch typing. Experience simple,elegant,fast, clean touch typing and improve your typing skills",
            icon: "faKeyboard",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964478/touch-typing-1.0/one_pk4aig.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964484/touch-typing-1.0/two_sadxvd.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964489/touch-typing-1.0/three_gvhvy5.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964494/touch-typing-1.0/four_stdc3o.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964499/touch-typing-1.0/five_jvblxd.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964503/touch-typing-1.0/six_wz82nj.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704964506/touch-typing-1.0/seven_rhigv8.png",
            ],
            liveLink: "https://pegasis-typing.firebaseapp.com",
            gitHubLink: "https://www.google.com",
      },
      {
            title: "Ecommerce",
            keyFunctionalities: [
                  "add product to cart",
                  "delete product from cart",
                  "add address",
                  "edit address",
                  "delete address",
                  "place an order",
                  "filter products",
                  "searching products using the title",
                  "pagination",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/bf0594f3-b4ea-4c85-9dff-9040dde8d7f8.svg",
            introduction:
                  "A web based electronics shopping app. Experience shopping like never before. Shop for your favourite mobiles,laptops etc",
            icon: "faCartShopping",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826201/ecommerce/one_op1q9q.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826204/ecommerce/two_zc2c0r.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826208/ecommerce/three_sc0usr.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826215/ecommerce/four_rztsw9.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826222/ecommerce/five_lygyci.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826232/ecommerce/six_qkljad.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704826239/ecommerce/seven_xndyzq.png",
            ],
            liveLink: "https://ecommerce-fawn-pi-63.vercel.app",
            gitHubLink: "https://github.com/runtimeerror55/ecommerce",
      },
      {
            title: "Video library",
            keyFunctionalities: [
                  "add video to watch later",
                  "delete video from watch later",
                  "create play list",
                  "add video to a particular play list",
                  "delete video from a particular play list",
                  "filtering products using predefined tags",
                  "infinite scrolling",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/0d9368d3-45bf-46a4-97a2-0995cbea2eca.svg",
            introduction:
                  "A web based tech reviews app. Find all the tech related reviews all in one place.",
            icon: "faVideo",
            images: [
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827346/video-library/one_di3c4g.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827353/video-library/two_ai2amb.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827358/video-library/three_kn5tww.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827363/video-library/four_kw63qo.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827367/video-library/five_k4ymbf.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827375/video-library/six_i5j3ne.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827381/video-library/seven_fthsa5.png",
                  "https://res.cloudinary.com/diwrxz82u/image/upload/v1704827387/video-library/eight_hs4q9q.png",
            ],
            liveLink: "https://techtotube.vercel.app",
            gitHubLink: "https://github.com/runtimeerror55/techtotube",
      },
];
const blogs = [
      { title: "javascript arrays" },
      { title: "how js works behind the scenes" },
      { title: "javascript objects" },
      { title: "javascript functions" },
];
const seeds = async () => {
      await ProjectModel.deleteMany({});
      projects.forEach(async (project) => {
            const newProject = new ProjectModel(project);
            await newProject.save();
      });
};

const blogSeeds = () => {
      blogs.forEach(async (blog) => {
            const newBlog = new BlogModel(blog);
            await newBlog.save();
      });
};

seeds();
// blogSeeds();
