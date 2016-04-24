import random

def gen_hex_colour_code():
   return "#" + ''.join([random.choice('0123456789ABCDEF') for x in range(6)])

# rawdata = '''EddardS,
# JonS,
# JonA,
# TyrionL,
# BrandonS,
# DaenerysT,
# CatelynS,
# AryaS,
# RobertA,
# RobertB,
# SansaS,
# RobbS,
# JoffreyB,
# Drogo,
# PetyrB,
# JaimeL,
# JorahM,
# TywinL,
# Luwin,
# LysaA,
# SamwellT,
# Varys,
# RodrikC,
# Bronn,
# CerseiL,
# RenlyB,
# SeptaM,
# ViserysT,
# Pycelle,
# SandorC,
# JoryC,
# GregorC,
# MirriM,
# StannisB,
# BenjenS,
# IllyrioM,
# Hodor,
# TheonG,
# BarristanS,
# JeorM,
# RickonS,
# BryndenT,
# Pyp,
# AlliserT,
# AemonT,
# Dragonknight,
# SyrioF,
# WalderF,
# LorasT,
# Grenn,
# Nan,
# VardisE,
# RhaegarT,
# EdmureT,
# JeyneP,
# Irri,
# Jhiqui,
# Qotho,
# Tom,
# Osha,
# Doreah,
# Shagga,
# GreatjonU,
# Yoren,
# Halder,
# KevanL,
# Jhogo,
# AerysT,
# Lyanna,
# Mord,
# MerynT,
# JanosS,
# IlynP,
# Aggo,
# Marillion,
# JaremyR,
# HosterT,
# Myrcella,
# BericD,
# Tommen,
# BorosB,
# Alyn,
# Haggo,
# MarqP,
# RooseB,
# Cohollo,
# Chett,
# Timett,
# RickardK,
# Mycah,
# BowenM,
# Conn,
# Shae,
# Rakharo,
# Chiggen,
# Desmond,
# VayonP,
# RaymunD,
# Jyck,
# DonalN,
# Ogo,
# WillisW,
# AddamM,
# Quaro,
# Hullen,
# MashaH,
# Harwin,
# Rhaego,
# Dareon,
# TobhoM,
# HallisM,
# Colemon,
# Morrec,
# StevronF,
# Cayn,
# KarylV,
# MaegeM,
# GalbartG,
# Maegor,
# Lefford,
# DonnelW,
# HalM,
# RandyllT,
# Hobb,
# TorrhenK,
# Malleon,
# DarynH,'''
# lines = rawdata.split('\n')
# names = open("names.csv", "w")
# names.write("name,color" + '\n') 
# for line in lines:
# 	names.write(line + gen_hex_colour_code() + '\n') 

def color_variant(hex_color, brightness_offset=1):
    """ takes a color like #87c95f and produces a lighter or darker variant """
    if len(hex_color) != 7:
        raise Exception("Passed %s into color_variant(), needs to be in #87c95f format." % hex_color)
    rgb_hex = [hex_color[x:x+2] for x in [1, 3, 5]]
    new_rgb_int = [int(hex_value, 16) + brightness_offset for hex_value in rgb_hex]
    new_rgb_int = [min([255, max([0, i])]) for i in new_rgb_int] # make sure new values are between 0 and 255
    # hex() produces "0x88", we want just "88"
    return "#" + "".join([hex(i)[2:] for i in new_rgb_int])

centralityData = []
rawDataFile = open('GoT1-centralitydata.csv', 'rb')
rawData = rawDataFile.readlines()
for line in rawData[0].split('\r'):
	centralityData.append(line.split(','))

# print centralityData

from collections import defaultdict
groups = defaultdict(list)

for data in centralityData:
	if data[0] == "id": continue
	groups[data[9]].append(data[0])

nameCsv = open("namesTest.csv", "w")
nameCsv.write("name,color\n")
for group in groups:
	groupColor =  gen_hex_colour_code()
	offset = -50
	for char in groups[group]:
		nameCsv.write(char + "," + color_variant(groupColor, offset))
		nameCsv.write("\n")
		offset += 5

