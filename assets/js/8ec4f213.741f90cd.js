"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Stable Diffusion - CPU",sidebar_position:1},s="Stable Diffusion on a CPU",r={unversionedId:"examples/model-inference/stable-diffusion-cpu/index",id:"examples/model-inference/stable-diffusion-cpu/index",title:"Stable Diffusion on a CPU",description:"Open In Colab",source:"@site/docs/examples/model-inference/stable-diffusion-cpu/index.md",sourceDirName:"examples/model-inference/stable-diffusion-cpu",slug:"/examples/model-inference/stable-diffusion-cpu/",permalink:"/examples/model-inference/stable-diffusion-cpu/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion-cpu/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Stable Diffusion - CPU",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Model Inference",permalink:"/examples/model-inference/"},next:{title:"Stable Diffusion - GPU",permalink:"/examples/model-inference/stable-diffusion-gpu/"}},l={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"1. Development",id:"1-development",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Converting Stable Diffusion to a CPU Model Using OpenVINO",id:"converting-stable-diffusion-to-a-cpu-model-using-openvino",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Clone the Repository and Dependencies",id:"clone-the-repository-and-dependencies",level:3},{value:"Generating an Image",id:"generating-an-image",level:3},{value:"2. Running Stable Diffusion (CPU) on Bacalhau",id:"2-running-stable-diffusion-cpu-on-bacalhau",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Generating an Image Using Stable Diffusion on Bacalhau",id:"generating-an-image-using-stable-diffusion-on-bacalhau",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stable-diffusion-on-a-cpu"},"Stable Diffusion on a CPU"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/stable-diffusion-cpu/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/stable-diffusion/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open source alternative to ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text."),(0,i.kt)("p",null,"This example demonstrates how to use stable diffusion on a CPU and run it on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," network. The first section describes the development of the code and the container. The section section demonstrates how to run the job using ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau"),"."),(0,i.kt)("p",null,"The following image is an example generated by this model."),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 -- python demo.py --prompt "cod in space" --output ../outputs/cod.png\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1121).Z,width:"512",height:"512"})),(0,i.kt)("h2",{id:"1-development"},"1. Development"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"original")," text-to-image stable diffusion model was trained on a fleet of GPU machines, at great cost. To use this trained model for inference, you also need to run it on a GPU."),(0,i.kt)("p",null,"However, this isn't always desired or possible. One alternative is to use a project called ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/latest/index.html"},"OpenVINO")," from Intel that allows you to convert and optimise models from a variety of frameworks (and ONNX if your framework isn't directly supported) to run on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/latest/openvino_docs_OV_UG_Working_with_devices.html"},"supported")," Intel CPU. This is what we will do in this example."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Heads up! This example takes about 10 minutes to generate an image on an average CPU. Whilst this demonstrates it is possible, it might not be practical.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to run this example you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Debian-flavoured Linux (although you ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bfirsh/stable-diffusion/tree/apple-silicon-mps-support"},"might be able")," to get it working on M1 macs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,i.kt)("h3",{id:"converting-stable-diffusion-to-a-cpu-model-using-openvino"},"Converting Stable Diffusion to a CPU Model Using OpenVINO"),(0,i.kt)("p",null,"The first step is to convert the trained stable diffusion models so that they work efficiently on a CPU using OpenVINO. The example is quite complex, so we have created a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino"},"separate repository")," (which is a fork from Github user ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bes-dev/stable_diffusion.openvino"},"Sergei Belousov"),") to host the code. In summary, the code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloads a ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino"},"pre-optimized OpenVINO version")," of ..."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/CompVis/stable-diffusion-v1-4"},"original")," pre-trained stable diffusion model ..."),(0,i.kt)("li",{parentName:"ul"},"which also leverages OpenAI's ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/openai/clip-vit-large-patch14"},"CLIP transformer")," ..."),(0,i.kt)("li",{parentName:"ul"},"and is then wrapped inside an OpenVINO runtime, which reads in and executes the model.")),(0,i.kt)("p",null,"The core code representing these tasks can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/stable_diffusion_engine.py"},"in the ",(0,i.kt)("inlineCode",{parentName:"a"},"stable_diffusion_engine.py")," file"),". This is a mashup that creates a pipeline necessary to tokenize the text and run the stable diffusion model. This boilerplate could be simplified by leveraging the more recent version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huggingface/diffusers"},"diffusers library"),". But let's crack on."),(0,i.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,i.kt)("p",null,"Note that these dependencies are only known to work on Ubuntu-based x64 machines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y libgl1 libglib2.0-0 git-lfs\n")),(0,i.kt)("h3",{id:"clone-the-repository-and-dependencies"},"Clone the Repository and Dependencies"),(0,i.kt)("p",null,"The following commands clone the example repository, other required repositories, and installs the Python dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/js-ts/stable_diffusion.openvino\ncd stable_diffusion.openvino\ngit lfs install\ngit clone https://huggingface.co/openai/clip-vit-large-patch14\ngit clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\npip3 install -r requirements.txt\n")),(0,i.kt)("h3",{id:"generating-an-image"},"Generating an Image"),(0,i.kt)("p",null,"Now that we have all the dependencies installed, we can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo.py")," wrapper, which is a simple CLI, to generate an image from a prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "hello" --output hello.png\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/hello.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(216).Z,width:"512",height:"512"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "cat driving a car" --output cat.png\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/cat.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(8374).Z,width:"512",height:"512"})),(0,i.kt)("h2",{id:"2-running-stable-diffusion-cpu-on-bacalhau"},"2. Running Stable Diffusion (CPU) on Bacalhau"),(0,i.kt)("p",null,"Now we have a working example, we can convert it into a format that allows us to perform inference in a distributed environment."),(0,i.kt)("p",null,"First we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to containerize the inference code. The Dockerfile ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/Dockerfile"},"can be found in the repository"),", but is presented here to aid understanding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM python:3.9.9-bullseye\n\nWORKDIR /src\n\nRUN apt-get update && \\\n    apt-get install -y \\\n    libgl1 libglib2.0-0 git-lfs\n\nRUN git lfs install\n\nCOPY requirements.txt /src/\n\nRUN pip3 install -r requirements.txt\n\nCOPY stable_diffusion_engine.py demo.py demo_web.py /src/\nCOPY data/ /src/data/\n\nRUN git clone https://huggingface.co/openai/clip-vit-large-patch14\nRUN git clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\n\n# download models\nRUN python3 demo.py --num-inference-steps 1 --prompt "test" --output /tmp/test.jpg\n')),(0,i.kt)("p",null,"This container is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"python:3.9.9-bullseye")," image and the working directory is set. Next the Dockerfile installs the same dependencies from earlier in this notebook. Then we add our custom code and pull the dependent repositories."),(0,i.kt)("p",null,"We've already pushed this image to GHCR, but for posterity, you'd use a command like this to update it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 .\n")),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"To run this example you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bacalhau.org/"},"Bacalhau")," installed and running")),(0,i.kt)("h3",{id:"generating-an-image-using-stable-diffusion-on-bacalhau"},"Generating an Image Using Stable Diffusion on Bacalhau"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," is a distributed computing platform that allows you to run jobs on a network of computers. It is designed to be easy to use and to run on a variety of hardware. In this example, we will use it to run the stable diffusion model on a CPU."),(0,i.kt)("p",null,"To submit a job, you can use the Bacalhau CLI. The following command passes a prompt to the model and generates an image in the outputs directory."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This will take about 10 minutes to complete. Go grab a coffee. Or a beer. Or both. If you want to block and wait for the job to complete, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--wait")," flag."),(0,i.kt)("p",{parentName:"admonition"},"Furthermore, the container itself is about 15GB, so it might take a while to download on the node if it isn't cached.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 --id-only -- python demo.py --prompt "First Humans On Mars" --output ../outputs/mars.png\n')),(0,i.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 14:14:05 \x1b[0m\x1b[97;40m ff7b104d \x1b[0m\x1b[97;40m Docker jsacex/stable... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmWxg6CXqZhjAa... \x1b[0m\n")),(0,i.kt)("p",null,"Wait until it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," and then get the results."),(0,i.kt)("p",null,"To find out more information about your job, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'APIVersion: V1alpha1\nClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\nCreatedAt: "2022-10-13T14:14:05.447388688Z"\nDeal:\n  Concurrency: 1\nExecutionPlan:\n  ShardsTotal: 1\nID: ff7b104d-0736-434e-8e5f-dc47c457cbf5\nJobState:\n  Nodes:\n    QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3:\n      Shards:\n        "0":\n          NodeId: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n          PublishedResults:\n            CID: QmWxg6CXqZhjAagQVxqopwhyXMHAHvTFKXYtWjzc7BJp65\n            Name: job-ff7b104d-0736-434e-8e5f-dc47c457cbf5-shard-0-host-QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n            StorageSource: IPFS\n          RunOutput:\n            exitCode: 0\n            runnerError: ""\n            stderr: "ftfy or spacy is not installed using BERT BasicTokenizer instead\n              of ftfy.\\n\\r0it [00:00, ?it/s]\\r1it [00:05,  5.26s/it]\\r2it [00:09,\n              \\ 4.95s/it]\\r3it [00:14,  4.96s/it]\\r4it [00:19,  4.84s/it]\\r5it [00:24,\n              \\ 4.92s/it]\\r6it [00:29,  4.83s/it]\\r7it [00:34,  4.84s/it]\\r8it [00:39,\n              \\ 4.84s/it]\\r9it [00:43,  4.78s/it]\\r10it [00:48,  4.78s/it]\\r11it [00:53,\n              \\ 4.77s/it]\\r12it [00:58,  4.78s/it]\\r13it [01:02,  4.76s/it]\\r14it\n              [01:07,  4.77s/it]\\r15it [01:12,  4.81s/it]\\r16it [01:17,  4.94s/it]\\r17it\n              [01:22,  4.92s/it]\\r18it [01:27,  4.93s/it]\\r19it [01:32,  4.91s/it]\\r20it\n              [01:37,  4.90s/it]\\r21it [01:42,  4.87s/it]\\r22it [01:46,  4.81s/it]\\r23it\n              [01:51,  4.81s/it]\\r24it [01:56,  4.76s/it]\\r25it [02:01,  4.80s/it]\\r26it\n              [02:05,  4.71s/it]\\r27it [02:10,  4.65s/it]\\r28it [02:14,  4.56s/it]\\r29it\n              [02:18,  4.52s/it]\\r30it [02:23,  4.60s/it]\\r31it [02:28,  4.60s/it]\\r32it\n              [02:32,  4.62s/it]\\r32it [02:32,  4.78s/it]"\n            stderrtruncated: false\n            stdout: ""\n            stdouttruncated: false\n          State: Completed\n          Status: \'Got results proposal of length: 0\'\n          VerificationResult:\n            Complete: true\n            Result: true\n    QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL:\n      Shards:\n        "0":\n          NodeId: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n          PublishedResults: {}\n          State: Cancelled\n          VerificationResult: {}\nRequesterNodeID: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\nRequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCehDIWl72XKJi1tsrYM9JjAWt3n6hNzrCA+IVRXixK1sJVTLMpsxEP8UKJI+koAWkAUuY8yi6DMzot0owK4VpM3PYp34HdKi2hTjzM8pjCVb70XVXt6k9bzj4KmbiQTuEkQfvwIRmgxb2jrkRdTpZmhMb1Q7StR/nrGa/bx75Vpupx1EYH6+LixYnnV5WbCUK/kjpBW8SF5v+f9ZO61KHd9DMpdhJnzocTGq17tAjHh3birke0xlP98JjxlMkzzvIAuFsnH0zBIgjmHDA1Yi5DcOPWgE0jUfGlSDC1t2xITVoofHQcXDjkHZE6OhxswNYPd7cnTf9OppLddFdQnga5AgMBAAE=\nSpec:\n  Docker:\n    Entrypoint:\n    - python\n    - demo.py\n    - --prompt\n    - First Humans On Mars\n    - --output\n    - ../outputs/mars.png\n    Image: ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1\n  Engine: Docker\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Verifier: Noop\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\n')),(0,i.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fetching results of job 'ff7b104d-0736-434e-8e5f-dc47c457cbf5'...\n")),(0,i.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls results/volumes/outputs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mars.png\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/volumes/outputs/mars.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:n(6789).Z,width:"512",height:"512"})))}d.isMDXComponent=!0},1121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cod-20eab047ac8cdbd4a1345bcdb269b4e0.png"},8374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_10_0-fea9a9996ca891e993b0f7f5f5cf4d24.png"},6789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_22_0-c2e2786333fb3f08d08a6a435084100d.png"},216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_8_0-2b8181632cc5143706e0bd8203496e06.png"}}]);