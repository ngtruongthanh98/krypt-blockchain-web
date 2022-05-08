const main = async () => {
    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const transacions = await Transactions.deploy();

    await transacions.deployed();

    console.log("Transactions deployed to:", transacions.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
