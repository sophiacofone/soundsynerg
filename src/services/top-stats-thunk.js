import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./top-stats-service"

export const findTopStatsThunk = createAsyncThunk(
    'topStats/findTopStats', async () =>
        await service.findTopStats()
)

export const findTopStatByIdThunk = createAsyncThunk(
    'topStats/findTopStatById', async (id) =>
        await service.findTopStatById(id)
)

export const createTopStatThunk = createAsyncThunk(
    'topStats/createTopStat', async (topStat) => {
        await service.createTopStat(topStat)
        return topStat
    })

export const deleteTopStatThunk = createAsyncThunk(
    'topStats/deleteTopStat', async (id) => {
        await service.deleteTopStat(id)
        return id
    })

export const updateTopStatThunk = createAsyncThunk(
    'topStats/updateTopStat', async (topStat) =>
        await service.updateTopStat(topStat)
    )
