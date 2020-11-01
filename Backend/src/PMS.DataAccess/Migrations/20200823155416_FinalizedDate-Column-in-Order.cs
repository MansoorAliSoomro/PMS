﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PMS.DataAccess.Migrations
{
    public partial class FinalizedDateColumninOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "FinalizedDate",
                table: "Orders",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FinalizedDate",
                table: "Orders");
        }
    }
}
