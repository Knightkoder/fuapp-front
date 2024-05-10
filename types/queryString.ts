export type QueryString = {
    populate: string,
    sort: { createdAt: string },
    pagination: {
      page: number,
      pageSize: number,
    }, filters: {}
}