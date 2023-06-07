## Token Bound Account Front End Template

Create a front end for users to browse their owned NFTs & create token-bound smart wallets associated with these NFTs.
Allow users to claim tokens to their token-bound wallets.
## Using this template

1. Deploy a Token Bound Account & Token Bound Account factory contract
2. Clone this repository using the thirdweb [CLI](https://portal.thirdweb.com/cli)
3. Create a thirdweb API key
4. Paste your details into `const/constants.ts`

### 1. Deploy Token Bound Account Implementation & Factory

- Deploy a [Token Bound Account Factory](https://github.com/thirdweb-example/token-gated-account/blob/main/src/TokenGatedAccountFactory.sol): this enables the programmatic distribution of token-bound accounts for users. 
- Deploy a [Token Bound Account](https://github.com/thirdweb-example/token-gated-account/blob/main/src/TokenGatedAccount.sol) implementation contract: This is the implementation contract in which your factory will deploy instances.
### Cloning this repository

Run the following command from your terminal:

```bash
npx thirdweb create --template token-bound-account-app
```

_Note: This requires [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads). [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) is also recommended._

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions or suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
