initSidebarItems({"macro":[["join","Polls multiple futures simultaneously, returning a tuple of all results once complete."],["pending","A macro which yields to the event loop once."],["poll","A macro which returns the result of polling a future once within the current `async` context."],["ready","Extracts the successful type of a `Poll<T>`."],["select","Polls multiple futures and streams simultaneously, executing the branch for the future that finishes first. Futures passed to `select!` must be `Unpin` and implement `FusedFuture`. Futures and streams which are not already fused can be fused using the `.fuse()` method. Note, though, that fusing a future or stream directly in the call to `select!` will not be enough to prevent it from being polled after completion if the `select!` call is in a loop, so when `select!`ing in a loop, users should take care to `fuse()` outside of the loop."],["try_join","Polls multiple futures simultaneously, resolving to a [`Result`] containing either a tuple of the successful outputs or an error."],["try_poll","Extracts `Poll<T>` from `Poll<Result<T, E>>`."],["try_ready","Extracts the successful type of a `Poll<Result<T, E>>`."]],"mod":[["async_await","Await"],["future","Futures"],["io","IO"],["lock","Futures-powered synchronization primitives."],["sink","Sinks"],["stream","Streams"],["task","Task notification"],["try_future","Futures"],["try_stream","Streams"]]});