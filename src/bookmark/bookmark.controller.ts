import { Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { Body, HttpCode, Param } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks') 

export class BookmarkController{
    constructor(private bookmarkService: BookmarkService) {}
        

    @Get()
    getBookmarks(@GetUser('id') userId: number) {
        return this.bookmarkService.getBookmarks(userId)
    }

    @Get(':id')
    getBookmarkById(@GetUser('id') userId: number,@Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.getBookmarkById(userId, bookmarkId)
    }

    @Post()
    createBookmark(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto) {
        return this.bookmarkService.createBookmark(userId, dto)
    }

    @Patch(':id')
    editBookmarkById(@GetUser('id') userId: number,@Body() dto: EditBookmarkDto, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.editBookmarkById(userId, dto, bookmarkId)
    }
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteBookmarkById(@GetUser('id') userId: number,@Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.deleteBookmarkById(userId, bookmarkId)
    }
}

    
