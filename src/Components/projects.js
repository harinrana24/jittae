export const projects = [
    {
        id: 1,
        name: "Sub-Z",
        description: "A Complete Subdomain Enumeration Tool.",
        features: [
            "Find Subdomains in Seconds.",
            "Can Give you status code for every subdomain.",
            "Option for filter out only HTTPS website.",
            "Option to get IP for every SubDomain.",
            "Option for filter out only live Websites."
        ],
        installation: [
            "git clone https://github.com/j1t3sh/SUB-Z.git",
            "chmod +x requirements.txt",
            "sudo pip3 install -r requirements.txt"
        ],
        usage: [
            "python3 Sub-Z.py -d example.com",
            "python3 Sub-Z.py -d example.com -https",
            "python3 Sub-Z.py -d example.com -ip",
            "python3 Sub-Z.py -d example.com -live",
            "python3 Sub-Z.py -d example.com -https -ip -live"
        ],
        github: "https://github.com/j1t3sh/SUB-Z",
        image: "./subz.png"
    },
    {
        id: 2,
        name: "SQL-Injection-Finder",
        description: "A simple tool to find sql injection vulnerability using google dorks.",
        installation: [
            "git clone https://github.com/j1t3sh/SQL-Injection-Finder.git",
            "cd SQL-Injection-Finder",
            "pip3 install -r requirements.txt"
        ],
        usage: [
            "python3 SQLI-Finder.py"
        ],
        features: [
            "Automated scanning for SQL injection vulnerabilities",
            "Testing various injection techniques (e.g., Boolean-based, error-based)",
            "Checking input validation effectiveness",
            "Crafting and injecting payloads for vulnerability detection",
            "Identifying database type and version",
            "Generating detailed vulnerability reports",
            "Customizable settings for scanning",
            "Reduction of false positives",
            "Handling session management during scanning",
            "Integration with CI pipelines or security frameworks",
            "Testing blacklist/whitelist filtering mechanisms",
            "Learning mode to observe normal application behavior",
            "Support for multiple web platforms and languages",
            "Real-time alerts and notifications",
            "Documentation and user support. Tip: Use Google hacking database (https://www.exploit-db.com/google-hacking-database) for good sqli dorks."
        ],
        github: "https://github.com/j1t3sh/SQL-Injection-Finder",
        image: "./SQL.png"
    },
    {
        id: 3,
        name: "CANghost",
        description: "An Automated Tool For Hacking Into CAN Bus - Car Hacking, CANghost is designed to automate the process of hacking or practicing on CAN networks. The script allows users to dump all CAN packets in a 'Capture' option and replay them, facilitating effective learning and experimentation in car hacking",
        installation: [
            "sudo apt-get install can-utils -y",
            "git clone https://github.com/SouravSec/CANghost",
            "can_utils_components: cansniffer for sniffing the packets",
            "cansend for writing a packet",
            "candump dump all received packets",
            "canplayer to replay CAN packets",
            "cangen to generate random CAN packets"
        ],
        features: [
            "The project automates the process of hacking into CAN Bus systems",
            "Ensuring Linux compatibility and recommending Ubuntu",
            "Relies on can-utils and ICSim for car simulation",
            "Installation simplified through cloning the repository and using apt-get",
            "User-friendly bash script (canghost.sh) facilitates easy usage",
            "Emphasizing safety on simulators over real cars",
            "Created for educational and personal use",
            "Encourages engagement with the creator and acknowledges contributors"
        ],
        usage: [
            "Any Linux Distributions (Ubuntu is Recommended) can-utils ICSim - Car Simulation (https://github.com/SouravSec/ICSim)",
            "bash canghost.sh <interface> <logfilename> (e.g., bash canghost.sh vcan0 demolog)"
        ],
        github: "https://github.com/j1t3sh/CANghost",
        image: "./canghost.png"
    }
]
