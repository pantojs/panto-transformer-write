/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[15:46:45]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const fs = require('fs');
const assert = require('assert');
const panto = require('panto');
const WriteTransformer = require('../');

describe('panto-transformer-write', () => {
    describe('.destname', () => {
        it('should support function', done => {
            const file = {
                filename: '1.js',
                destname: '2.js',
                content: '0x0810'
            };

            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            new WriteTransformer({
                destname: file => file.destname
            }).transform(file).then(tfile => {
                const path = __dirname + '/output/2.js';
                assert.ok(fs.existsSync(path));
                assert.ok(fs.statSync(path).isFile());
                const content = fs.readFileSync(path, 'utf8');
                assert.deepEqual(content, '0x0810');
            }).then(() => {
                done();
            });
        });
    });
    describe('#transform', () => {
        it('should write', done => {
            const file = {
                filename: 'a.js',
                content: '0x0810'
            };

            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            new WriteTransformer({
                destname: 'a.js'
            }).transform(file).then(tfile => {
                const path = __dirname + '/output/a.js';
                assert.ok(fs.existsSync(path));
                assert.ok(fs.statSync(path).isFile());
                const content = fs.readFileSync(path, 'utf8');
                assert.deepEqual(content, '0x0810');
            }).then(() => {
                done();
            });
        });
        it('should not write if content is null/undefined', done => {
            const file = {
                filename: 'm.js'
            };

            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            new WriteTransformer({
                destname: 'n.js'
            }).transform(file).then(tfile => {
                const path = __dirname + '/output/n.js';
                assert.ok(!fs.existsSync(path));
            }).then(() => {
                done();
            });
        });
        it('should return final name', done => {
            const file = {
                filename: 'm.js'
            };

            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            new WriteTransformer({
                destname: 'n.js'
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile.filename, 'n.js');
            }).then(() => {
                done();
            });
        });
    });
});
