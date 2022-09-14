"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"CLI Reference",sidebar_position:9},i="CLI Commands",s={unversionedId:"all-flags",id:"all-flags",title:"CLI Commands",description:"The following commands refer to bacalhau cli version v0.2.3.",source:"@site/docs/all-flags.md",sourceDirName:".",slug:"/all-flags",permalink:"/all-flags",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/all-flags.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"CLI Reference",sidebar_position:9},sidebar:"documentationSidebar",previous:{title:"GPU Support",permalink:"/running-node/gpu"},next:{title:"Development",permalink:"/development"}},l=[{value:"Create",id:"create",children:[{value:"Examples",id:"examples",children:[],level:4}],level:2},{value:"Describe",id:"describe",children:[{value:"Example",id:"example",children:[],level:4}],level:2},{value:"Docker run",id:"docker-run",children:[{value:"Example",id:"example-1",children:[],level:4}],level:2},{value:"Get",id:"get",children:[{value:"Example",id:"example-2",children:[],level:4}],level:2},{value:"List",id:"list",children:[{value:"Example",id:"example-3",children:[],level:4}],level:2},{value:"Run Python",id:"run-python",children:[],level:2},{value:"Serve",id:"serve",children:[],level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-commands"},"CLI Commands"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following commands refer to bacalhau cli version ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.2.3"),".\nFor installing or upgrading a client follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation"},"installation page"),".\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau version")," in a terminal to check what version you have."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u276f bacalhau --help\nCompute over data\n\nUsage:\n  bacalhau [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  create      Create a job using a json or yaml file.\n  describe    Describe a job on the network\n  devstack    Start a cluster of bacalhau nodes for testing and development\n  docker      Run a docker job on the network (see run subcommand)\n  get         Get the results of a job\n  help        Help about any command\n  list        List jobs on the network\n  run         Run a job on the network (see subcommands for supported flavors)\n  serve       Start the bacalhau compute node\n  version     Get the client and server version.\n\nFlags:\n      --api-host string   The host for the client and server to communicate on (via REST). Ignored if BACALHAU_API_HOST environment variable is set. (default "bootstrap.production.bacalhau.org")\n      --api-port int      The port for the client and server to communicate on (via REST). Ignored if BACALHAU_API_PORT environment variable is set. (default 1234)\n  -h, --help              help for bacalhau\n\nUse "bacalhau [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"Submit a job to the network in a declarative way by writing a jobspec instead of writing a command.\nJSON and YAML formats are accepted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Create a job from a file or from stdin.\n\n JSON and YAML formats are accepted.\n\nUsage:\n  bacalhau create [flags]\n\nFlags:\n  -c, --concurrency int             How many nodes should run the job (default 1)\n      --confidence int              The minimum number of nodes that must agree on a verification result\n      --download                    Download the results and print stdout once the job has completed (implies --wait).\n      --download-timeout-secs int   Timeout duration for IPFS downloads. (default 10)\n  -g, --gettimeout int              Timeout for getting the results of a job in --wait (default 10)\n  -h, --help                        help for create\n      --ipfs-swarm-addrs string     Comma-separated list of IPFS nodes to connect to.\n      --local                       Run the job locally. Docker is required\n      --output-dir string           Directory to write the output to. (default ".")\n      --wait                        Wait for the job to finish.\n      --wait-timeout-secs int       When using --wait, how many seconds to wait for the job to complete before giving up. (default 600)\n')),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Create a job using the data in job.json\nbacalhau create ./job.json\n\n# Create a job based on the JSON passed into stdin\ncat job.json | job create -\n")),(0,o.kt)("p",null,"An example jobspec in YAML format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1alpha1\nengine: Docker\nverifier: Ipfs\njob_spec_docker:\n  image: gromacs/gromacs\n  entrypoint:\n    - /bin/bash\n    - -c\n    - echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o output/1AKI_processed.gro -water spc\n  env: []\njob_spec_language:\n  language: ''\n  language_version: ''\n  deterministic: false\n  context:\n    engine: ''\n    name: ''\n    cid: ''\n    path: ''\n  command: ''\n  program_path: ''\n  requirements_path: ''\nresources:\n  cpu: ''\n  gpu: ''\n  memory: ''\n  disk: ''\ninputs:\n  - engine: ipfs\n    name: ''\n    cid: QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9\n    path: /input\n  - engine_name: urldownload\n    name: ''\n    url: https://foo.bar.io/foo_data.txt\n    path: /app/foo_data_1.txt\noutputs:\n  - engine: ipfs\n    name: output\n    cid: ''\n    path: /output\nannotations: null\n")),(0,o.kt)("p",null,"An example jobspoec in JSON format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "v1alpha1",\n  "engine": "Docker",\n  "verifier": "Ipfs",\n  "job_spec_docker": {\n      "image": "gromacs/gromacs",\n      "entrypoint": [\n          "/bin/bash",\n          "-c",\n          "echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o output/1AKI_processed.gro -water spc"\n      ],\n      "env": []\n  },\n  "job_spec_language": {\n      "language": "",\n      "language_version": "",\n      "deterministic": false,\n      "context": {\n          "engine": "",\n          "name": "",\n          "cid": "",\n          "path": ""\n      },\n      "command": "",\n      "program_path": "",\n      "requirements_path": ""\n  },\n  "resources": {\n      "cpu": "",\n      "gpu":"",\n      "memory": "",\n      "disk": ""\n  },\n  "inputs": [\n      {\n          "engine": "ipfs",\n          "name": "",\n          "cid": "QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9",\n          "path": "/input"\n      }\n  ],\n  "outputs": [\n      {\n          "engine": "ipfs",\n          "name": "output",\n          "cid": "",\n          "path": "/output"\n      }\n  ],\n  \n  "annotations": null\n}\n')),(0,o.kt)("h2",{id:"describe"},"Describe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Full description of a job, in yaml format. Use 'bacalhau list' to get a list of all ids. Short form and long form of the job id are accepted.\n\nUsage:\n  bacalhau describe [id] [flags]\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Describe a job with the full ID\nbacalhau describe e3f8c209-d683-4a41-b840-f09b88d087b9\n\n# Describe a job with the a shortened ID\nbacalhau describe 47805f5c\n")),(0,o.kt)("h2",{id:"docker-run"},"Docker run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Runs a job using the Docker executor on the node.\n\nUsage:\n  bacalhau docker run [flags]\n\nFlags:\n  -c, --concurrency int                How many nodes should run the job (default 1)\n      --confidence int                 The minimum number of nodes that must agree on a verification result\n      --cpu string                     Job CPU cores (e.g. 500m, 2, 8).\n      --download                       Download the results and print stdout once the job has completed (implies --wait).\n      --download-timeout-secs int      Timeout duration for IPFS downloads. (default 10)\n      --engine string                  What executor engine to use to run the job (default \"docker\")\n  -e, --env strings                    The environment variables to supply to the job (e.g. --env FOO=bar --env BAR=baz)\n  -g, --gettimeout int                 Timeout for getting the results of a job in --wait (default 10)\n      --gpu string                     Job GPU requirement (e.g. 1, 2, 8).\n  -h, --help                           help for run\n  -u, --input-urls strings             URL:path of the input data volumes downloaded from a URL source. Mounts data at 'path' (e.g. '-u http://foo.com/bar.tar.gz:/app/bar.tar.gz'\n                                                mounts 'http://foo.com/bar.tar.gz' at '/app/bar.tar.gz'). URL can specify a port number (e.g. 'https://foo.com:443/bar.tar.gz:/app/bar.tar.gz')\n                                                and supports HTTP and HTTPS.\n  -v, --input-volumes strings          CID:path of the input data volumes, if you need to set the path of the mounted data.\n  -i, --inputs strings                 CIDs to use on the job. Mounts them at '/inputs' in the execution.\n      --ipfs-swarm-addrs string        Comma-separated list of IPFS nodes to connect to.\n  -l, --labels strings                 List of labels for the job. Enter multiple in the format '-l a -l 2'. All characters not matching /a-zA-Z0-9_:|-/ and all emojis will be stripped.\n      --local                          Run the job locally. Docker is required\n      --memory string                  Job Memory requirement (e.g. 500Mb, 2Gb, 8Gb).\n      --min-bids int                   Minimum number of bids that must be received before concurrency-many bids will be accepted (at random)\n      --output-dir string              Directory to write the output to. (default \".\")\n  -o, --output-volumes strings         name:path of the output data volumes. 'outputs:/outputs' is always added.\n      --publisher string               What publisher engine to use to publish the job results (default \"estuary\")\n      --sharding-base-path string      Where the sharding glob pattern starts from - useful when you have multiple volumes. (default \"/inputs\")\n      --sharding-batch-size int        Place results of the sharding glob pattern into groups of this size. (default 1)\n      --sharding-glob-pattern string   Use this pattern to match files to be sharded.\n      --skip-syntax-checking           Skip having 'shellchecker' verify syntax of the command\n      --verifier string                What verification engine to use to run the job (default \"noop\")\n      --wait                           Wait for the job to finish.\n      --wait-timeout-secs int          When using --wait, how many seconds to wait for the job to complete before giving up. (default 600)\n  -w, --workdir string                 Working directory inside the container. Overrides the working directory shipped with the image (e.g. via WORKDIR in Dockerfile).\n")),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Run a Docker job, using the image 'dpokidov/imagemagick', with a CID mounted at /input_images and an output volume mounted at /outputs in the container.\n# All flags after the '--' are passed directly into the container for execution.\nbacalhau docker run \\\n-v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\ndpokidov/imagemagick:7.1.0-47-ubuntu \\\n-- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n")),(0,o.kt)("h2",{id:"get"},"Get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Get the results of the job, including stdout and stderr.\n\nUsage:\n  bacalhau get [id] [flags]\n\nFlags:\n      --download-timeout-secs int   Timeout duration for IPFS downloads. (default 600)\n  -h, --help                        help for get\n      --ipfs-swarm-addrs string     Comma-separated list of IPFS nodes to connect to.\n      --output-dir string           Directory to write the output to. (default ".")\n')),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Get the results of a job.\nbacalhau get 51225160-807e-48b8-88c9-28311c7899e1\n\n# Get the results of a job, with a short ID.\nbacalhau get ebd9bf2f\n")),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'List jobs on the network.\n\nUsage:\n  bacalhau list [flags]\n\nFlags:\n  -h, --help               help for list\n      --hide-header        do not print the column headers.\n      --id-filter string   filter by Job List to IDs matching substring.\n      --no-style           remove all styling from table output.\n  -n, --number int         print the first NUM jobs instead of the first 10. (default 10)\n      --output string      The output format for the list of jobs (json or text) (default "text")\n      --reverse            reverse order of table - for time sorting, this will be newest first. (default true)\n      --sort-by Column     sort by field, defaults to creation time, with newest first [Allowed "id", "created_at"]. (default created_at)\n      --wide               Print full values in the table results\n')),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# List jobs on the network\nbacalhau list\n\n# List jobs and output as json\nbacalhau list --output json\n")),(0,o.kt)("h2",{id:"run-python"},"Run Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Runs a job by compiling language file to WASM on the node.\n\nUsage:\n  bacalhau run python [flags]\n\nFlags:\n  -c, --command string           Program passed in as string (like python)\n      --concurrency int          How many nodes should run the job (default 1)\n      --confidence int           The minimum number of nodes that must agree on a verification result\n      --context-path string      Path to context (e.g. python code) to send to server (via public IPFS network) for execution (max 10MiB). Set to empty string to disable (default \".\")\n      --deterministic            Enforce determinism: run job in a single-threaded wasm runtime with no sources of entropy. NB: this will make the python runtime executein an environment where only some librarie are supported, see https://pyodide.org/en/stable/usage/packages-in-pyodide.html (default true)\n  -e, --env strings              The environment variables to supply to the job (e.g. --env FOO=bar --env BAR=baz)\n  -h, --help                     help for python\n  -v, --input-volumes strings    CID:path of the input data volumes\n  -i, --inputs strings           CIDs to use on the job. Mounts them at '/inputs' in the execution.\n  -l, --labels strings           List of labels for the job. Enter multiple in the format '-l a -l 2'. All characters not matching /a-zA-Z0-9_:|-/ and all emojis will be stripped.\n  -o, --output-volumes strings   name:path of the output data volumes\n  -r, --requirement string       Install from the given requirements file. (like pip)\n      --verifier string          What verification engine to use to run the job (default \"ipfs\")\n")),(0,o.kt)("h2",{id:"serve"},"Serve"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Start the bacalhau campute node.\n\nUsage:\n  bacalhau serve [flags]\n\nFlags:\n      --estuary-api-key string               The API key used when using the estuary API.\n      --filecoin-unsealed-path string        The go template that can turn a filecoin CID into a local filepath with the unsealed data.\n  -h, --help                                 help for serve\n      --host string                          The host to listen on (for both api and swarm connections). (default "0.0.0.0")\n      --ipfs-connect string                  The ipfs host multiaddress to connect to.\n      --job-selection-data-locality string   Only accept jobs that reference data we have locally ("local") or anywhere ("anywhere"). (default "local")\n      --job-selection-probe-exec string      Use the result of a exec an external program to decide if we should take on the job.\n      --job-selection-probe-http string      Use the result of a HTTP POST to decide if we should take on the job.\n      --job-selection-reject-stateless       Reject jobs that don\'t specify any data.\n      --limit-job-cpu string                 Job CPU core limit for single job (e.g. 500m, 2, 8).\n      --limit-job-gpu string                 Job GPU limit for single job (e.g. 1, 2, or 8).\n      --limit-job-memory string              Job Memory limit for single job  (e.g. 500Mb, 2Gb, 8Gb).\n      --limit-total-cpu string               Total CPU core limit to run all jobs (e.g. 500m, 2, 8).\n      --limit-total-gpu string               Total GPU limit to run all jobs (e.g. 1, 2, or 8).\n      --limit-total-memory string            Total Memory limit to run all jobs  (e.g. 500Mb, 2Gb, 8Gb).\n      --metrics-port int                     The port to serve prometheus metrics on. (default 2112)\n      --peer string                          The libp2p multiaddress to connect to.\n      --swarm-port int                       The port to listen on for swarm connections. (default 1235)\n')))}c.isMDXComponent=!0}}]);