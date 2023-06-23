// moduleQuery defines a query that can be sent to a module. The method is used
// to tell the module what query is being made. The domain is set by the
// kernel, and is guaranteed to match the domain of the caller. The module can
// use the 'domain' to enforce access control policies. The 'data' can be any
// arbitrary object, and will depend on the method. The module developer is
// ultimately the one who decides what data should be provided as input to each
// method call.
//
// NOTE: While the kernel does do verification for the method and domain, the
// kernel does not do any verification for the data field. The module itself is
// responsible for verifying all inputs provided in the data field.
interface moduleQuery {
  method: string;
  domain: string;
  data: any;
}

// presentKeyData contains the data that gets sent in a 'presentKey' call
// from the kernel. 'presentKey' is called on the module immediately after the
// module starts up.
//
// The 'key' is a unique key dervied by the kernel for the module based on
// the module's domain and the key of the user. Modules in different domains
// will have different keys, and have no way to guess what the keys of other
// modules are.
//
// It is safe to use the 'key' for things like blockchain wallets.
//
// If the module has been given access to the root private key,
// presentKeyData will include the rootPrivateKey. If the module does not
// have access to the root private key, the field will not be included. A
// module that receives the root private key has full read and write access
// to all of the user's data.
//
interface presentKeyData {
  key: Uint8Array;
  rootPrivateKey?: Uint8Array;
}

export { moduleQuery, presentKeyData };
