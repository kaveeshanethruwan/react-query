# Steps

1. npm i react-query.
2. useQuery takes at least two args: (uniqueId, callback func).
3. when it faced an error, it automatically retrying multiple times.
4. to run json server to this project: npm run serve-json.
5. by default every query result cache for 5 minutes. cache by the query key and callback function identifier.
6. when its render it will lookup in cache. to isFetching will indicate that event.
7. if you need to change the cache time, by passing 3rd arg into useQuery you can do that.
8. stale time: controller for background fetch
9. refetchOnMount: when component mount will trigger the query
10. refetchOnWindowFocus: when focus the window trigger the query
11. refetchInterval: polling - this will pause if screen lost the focus
12. refetchIntervalInBackground: polling in background/ window not in focus mode
13. onClick - enable: false in config, access refetch method, call it in eventHandler
14. onSuccess, onError - in useQuery these two configs are there to set callback func accordingly. both will get their own params, onError will get call after 3 retry count
15. select: after successful data fetching, if want to transform the data, select will provide a func to do it and return. useQuery will output that as data.
16. customHook for common use 
17. query by id